import { Session } from '@supabase/supabase-js'
import React from 'react'
import { SWRResponse } from 'swr'

import { supabase } from 'src/utils/supabase'

import { useStaticSWR } from './useStaticSWR'

export const useUserSession = (): SWRResponse<Session | null, Error> => {
  return useStaticSWR<Session | null, Error>('userSession')
}

export const useUser = () => {
  const { data: userSession, mutate: mutateUserSession } = useUserSession()

  const authStateChange = React.useCallback(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        mutateUserSession(session)
      }
    )
    authListener?.unsubscribe()
  }, [])

  return { userSession, mutateUserSession, authStateChange }
}

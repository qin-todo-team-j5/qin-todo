import React from 'react'

import { supabase } from 'src/utils/supabase'

export const useAuth = () => {
  const signInWithGoogle = React.useCallback(async () => {
    const { session, user, error } = await supabase.auth.signIn({
      provider: 'google',
    })

    return { session, user, error }
  }, [])

  const signOut = React.useCallback(async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return console.error(error)
    }
  }, [])

  return { signInWithGoogle, signOut }
}

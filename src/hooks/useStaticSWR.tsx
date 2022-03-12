import useSWR, { Key, SWRResponse, mutate, useSWRConfig } from 'swr'
import { Fetcher } from 'swr/dist/types'

/**
 * @see https://zenn.dev/itizawa/articles/9f71e1f636d3d2
 **/
export const useStaticSWR = <Data, Error>(
  key: Key,
  updateData?: Data | Fetcher<Data>,
  initialData?: Data | Fetcher<Data>
): SWRResponse<Data, Error> => {
  const { cache } = useSWRConfig()
  if (updateData == null) {
    if (!cache.get(key) && initialData != null) {
      mutate(key, initialData, false)
    }
  } else {
    mutate(key, updateData)
  }

  return useSWR(key, null, {
    revalidateOnFocus: false,
  })
}

import { useIntl } from 'react-intl'
import { useCallback } from 'react'

export const useTranslation = () => {
  const intl = useIntl()
  return useCallback(
    (id, params) => intl.formatMessage({ id }, params),
    [intl],
  )
}

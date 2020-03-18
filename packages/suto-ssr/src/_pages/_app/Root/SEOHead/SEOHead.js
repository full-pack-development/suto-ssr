import { useTranslation } from '_common/LocaleProvider/useTranslation'
import Head from 'next/head'
import React from 'react'

export const SEOHead = () => {
  const t = useTranslation()
  return (
    <Head>
      <title>
        {t('seo.common.title')}
      </title>
      <meta
        name="Description"
        content={t('seo.common.description')}
      />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display|Ubuntu&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

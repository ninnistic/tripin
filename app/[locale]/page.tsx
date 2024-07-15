import { createTranslation } from '@/utils/localization/server';
import { LocaleTypes } from '@/utils/localization/settings';

export default async function Home({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, 'common');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('home')}</h1>
    </main>
  );
}

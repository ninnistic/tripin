import Map from '@/components/maps/map';
import { LocaleTypes } from '@/utils/localization/settings';

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  return (
    <div>
      <Map locale={locale} />
    </div>
  );
}

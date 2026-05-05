import { useLocale, useSetLocale } from "../../contexts/LocaleContext";
import Select from "./Select";

export default function LocaleSelect() {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return (
    <Select
      variant='secondary'
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
    >
      <option value='ko'>한국어</option>
      <option value='en'>English</option>
    </Select>
  );
}

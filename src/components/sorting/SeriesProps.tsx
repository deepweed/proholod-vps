import { series } from './series';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

interface SeriesSelectorProps {
  categories: string[];
  onValueChange: (value: string) => void;
}

const SeriesSelector: React.FC<SeriesSelectorProps> = ({ categories, onValueChange }) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full mb-2 lg:w-[280px]">
        <SelectValue placeholder="Серия" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            series[category].map((serie) => (
              <SelectItem key={serie.value} value={serie.value}>
                {serie.label}
              </SelectItem>
            ))
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SeriesSelector;

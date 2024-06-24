export interface Serie {
    value: string;
    label: string;
}
  
export const series: Record<string, Serie[]> = {
    belluna: [
        { value: 'Econom', label: 'Эконом' },
        { value: 'Universal', label: 'Универсал' },
        { value: 'Blackslim', label: 'Blackslim' },
        { value: 'Frost', label: 'Фрост' },
        { value: 'InvertorProfi', label: 'Инвертор-профи' },
        { value: 'InvertorLux', label: 'Инвертор-люкс' },
      ],
      tvs: [
        { value: 'Series1', label: 'TV Series 1' },
        { value: 'Series2', label: 'TV Series 2' },
        // ...
      ],
    // ...
};
  
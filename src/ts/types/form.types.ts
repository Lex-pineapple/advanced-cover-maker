export type FormContextType = {
  displayData: {
    title: [string, React.Dispatch<React.SetStateAction<string>>];
    author: [string, React.Dispatch<React.SetStateAction<string>>];
    year: [string, React.Dispatch<React.SetStateAction<string>>];
    series: [string, React.Dispatch<React.SetStateAction<string>>];
  };
  settingData: {
    dimensions: [string, React.Dispatch<React.SetStateAction<string>>];
  };
};

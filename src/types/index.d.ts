// Analysis Card 的类型声明
export interface AnalysisCard {
  id: number;
  title: string;
  time: string;
  text: string;
  iconType: string;
  total: string;
  number: string;
}

// Update Item 的类型声明
export interface UpdateItem {
  id: number;
  content: string;
  time: string;
}

// Data Item 的类型声明
export interface DataItem {
  id: number;
  demand: number;
  issuesRaised: number;
  issuesResolved: number;
  satisfactionRate: string;
  date: string;
  icon: string;
}

// AnalysisData 的类型声明
export interface AnalysisData {
  analysisCardList: AnalysisCard[];
  updateList: UpdateItem[];
  dataList: DataItem[];
}

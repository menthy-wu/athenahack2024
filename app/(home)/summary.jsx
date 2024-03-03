import { ScrollView, View } from "react-native";
import Header from "@/components/Header";
import Report from "@/components/Report";
import reports from "../../data/reports";

export default function SummaryScreen() {
  return (
    < View className="flex items-center h-full bg-gray-300 pt-[5%]">
      <Header title="USC Drive party" time="38" mile="18" />
      < ScrollView className="bg-white w-11/12 mt-3 p-5 rounded-2xl">
        {reports.map((report, index) => (
            <Report
              key={index}
              title={report.title}
              text={report.text}
              type={report.type}
            />
        ))}
      </ ScrollView>
    </ View>
  );
}

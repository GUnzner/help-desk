import BarCharts from "./BarChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const { monthlyTickets: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Tickets</h4>
      <BarCharts data={data} />
    </Wrapper>
  );
};

export default ChartsContainer;

import OverviewComponent from "design-system/components/Overview/Overview";
import overviewData from "design-system/components/Overview/OverviewData";
import { OverViewContainer, OverviewWrapper } from "./style";

export default function Overview() {
  return (
    <OverviewWrapper>
      <div className="container">
        <OverViewContainer>
          {overviewData.map((item) => {
            return (
              <OverviewComponent
                title={item.title}
                description={item.description}
                icon={item.icon}
                key={item.id}
              />
            );
          })}
        </OverViewContainer>
      </div>
    </OverviewWrapper>
  );
}

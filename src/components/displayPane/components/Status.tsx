import type { Web3ReactHooks } from "@web3-react/core";
import { Typography } from "antd";
const { Paragraph } = Typography;

const styles = {
  display: {
    paddingBlock: "15px 0px"
  },
  statusText: {
    fontSize: "14px"
  },
  statusValue: {
    fontWeight: 300
  }
} as const;

const Status = ({
  isActivating,
  isActive
}: {
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
}) => {
  const statusMapping = {
    isActivating: "🟡",
    isActive: "🟢",
    default: "⚪️"
  };

  let status = statusMapping.default;
  if (isActivating) {
    status = statusMapping.isActivating;
  } else if (isActive) {
    status = statusMapping.isActive;
  }

  return (
    <div style={styles.display}>
      <Typography>
        <Paragraph style={styles.statusText}>
          <span style={styles.statusValue}>{status}</span>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Status;

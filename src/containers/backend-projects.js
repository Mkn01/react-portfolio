import ProjectCards from "../components/project";
import { PageTitle } from "../components/header";
const BackendProjectsPage = () => {
  return (
    <div>
      <PageTitle title={"Portfolio"} />
      <ProjectCards></ProjectCards>
    </div>
  );
};

export default BackendProjectsPage;

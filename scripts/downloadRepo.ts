import { downloadTemplate } from "giget";
import ora from "ora";

const downloadRepo = async () => {
  const spinner = ora("Downloading repository...").start();

  try {
    await downloadTemplate("gh:mallfoundry/taroify/packages#main", {
      dir: ".repo",
      force: true,
      forceClean: true,
    });
    spinner.succeed("Repository downloaded successfully!");
  } catch (error) {
    spinner.fail("Failed to download repository");
    console.error(error);
    process.exit(1);
  }
};

export default downloadRepo;

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import BranchNewEditForm from '../branch-new-edit-form';

// ----------------------------------------------------------------------

export default function BranchCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new branch"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Branch',
            href: paths.dashboard.branches.root,
          },
          { name: 'New branch' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <BranchNewEditForm />
    </Container>
  );
}

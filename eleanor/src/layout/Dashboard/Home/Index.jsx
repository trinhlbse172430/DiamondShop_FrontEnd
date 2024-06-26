// material-ui

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from './MainCard';
import AnalyticEcommerce from './AnalyticEcommerce';
import MonthlyBarChart from './MonthlyBarChart';
import UniqueVisitorCard from './UniqueVisitorCard';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
    return (
        <div style={{ backgroundColor: '#ffffff', height: '100vh' }}>
            <Grid container rowSpacing={6} columnSpacing={4.5} sx={{}}>
                {/* row 1 */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" unit="views" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" unit="cus" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" unit="orders" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" unit="VND" />
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <UniqueVisitorCard />
                </Grid>

                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Income Overview</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <Box sx={{ p: 3, pb: 0 }}>
                            <Stack spacing={2}>
                                <Typography variant="h6" color="text.secondary">
                                    This Week Statistics
                                </Typography>
                                <Typography variant="h3">7,000,650 VND</Typography>
                            </Stack>
                        </Box>
                        <MonthlyBarChart />
                    </MainCard>
                </Grid>

            </Grid>
        </div>
    );
}
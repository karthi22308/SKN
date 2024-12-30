import React, { useState } from 'react';
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import StarRateIcon from '@mui/icons-material/StarRate';  // Replaced RecommendationIcon with StarRateIcon
import TopBarStudent from '../../Components/TopBarStudent'; // Assuming you have the same TopBarAdmin component for admin

const StudentPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    // Updated handleChange to avoid unused `event` parameter warning
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    const TabContent = () => {
        switch (selectedTab) {
            case 0:
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h6">Assignments</Typography>
                        <Typography variant="body1">List of all assignments.</Typography>
                        {/* Add your Assignments content here */}
                    </Box>
                );
            case 1:
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h6">Leaderboard</Typography>
                        <Typography variant="body1">List of top performers.</Typography>
                        {/* Add your Leaderboard content here */}
                    </Box>
                );
            case 2:
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h6">Recommendations</Typography>
                        <Typography variant="body1">Suggested courses and materials.</Typography>
                        {/* Add your Recommendations content here */}
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <TopBarStudent />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Paper
                    elevation={3}
                    sx={{
                        width: '100%',
                        bgcolor: 'rgba(255, 255, 255, 0.7)',
                        padding: '8px',
                    }}
                >
                    <Tabs value={selectedTab} onChange={handleChange} aria-label="student tabs" centered>
                        <Tab label="Assignments" icon={<AssignmentIcon />} />
                        <Tab label="Leaderboard" icon={<LeaderboardIcon />} />
                        <Tab label="Recommendations" icon={<StarRateIcon />} />  {/* Replaced with StarRateIcon */}
                    </Tabs>
                </Paper>
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <TabContent />
                </Box>
            </Box>
        </div>
    );
};

export default StudentPage;

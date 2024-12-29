import React from 'react';
import { Button, Typography } from '@mui/material';

const ReportsTab: React.FC = () => {
    const generateReport = (type: string) => {
        console.log(`Generating ${type} report...`);
        // API call to generate report
    };

    return (
        <div>
            <Typography variant="h6">Batch-wise Score Card</Typography>
            <Button onClick={() => generateReport('Batch-wise Score Card')} variant="outlined">Generate PDF/Excel</Button>

            <Typography variant="h6">College-wise Score Card</Typography>
            <Button onClick={() => generateReport('College-wise Score Card')} variant="outlined">Generate PDF/Excel</Button>

            <Typography variant="h6">Topper List</Typography>
            <Button onClick={() => generateReport('Topper List')} variant="outlined">Generate PDF/Excel</Button>

            <Typography variant="h6">Batch Comparison Report</Typography>
            <Button onClick={() => generateReport('Batch Comparison')} variant="outlined">Generate PDF/Excel</Button>
        </div>
    );
};

export default ReportsTab;
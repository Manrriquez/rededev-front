import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};


const MainCard = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        },
        ref
    ) => {
        const theme = useTheme();

        return (
                <Card ref={ref} {...others} sx={{borderRadius: '12px', boxShadow: '0px 2px 65px 2px rgba(0, 0, 0, 0.05)', ...sx}}>
             
                {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}

                {darkTitle && title && (
                    <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
                )}
                
                {title && <Divider />}
                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);

MainCard.propTypes = {
    border: PropTypes.bool,
    boxShadow: PropTypes.bool,
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    contentSX: PropTypes.object,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    shadow: PropTypes.string,
    sx: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default MainCard;

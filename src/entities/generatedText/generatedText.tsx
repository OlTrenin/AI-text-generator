import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

interface Props {
    generatedText: string;
    isLoading: boolean;
}

export function GeneratedTextBox({ generatedText, isLoading }: Props) {

    return (
        <Box sx={{
            ml: 9,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: generatedText && !isLoading ? 1 : 'none',
            borderColor: generatedText && !isLoading ? "grey.500" : 0,
            borderRadius: '16px',
            p: 2,
        }}>
            {!isLoading ? (
                generatedText && <Typography>{generatedText}</Typography>
            ) : (
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress size={24} />
                    Текст генерируется...
                </Typography>
            )}
            {}

        </Box>
    );
}


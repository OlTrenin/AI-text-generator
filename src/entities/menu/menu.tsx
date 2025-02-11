import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import {useGenerateText} from "../generatedText/useGenerateText.ts";
import {GeneratedTextBox} from "../generatedText/generatedText.tsx";

export function Menu() {
    const {isLoading, generatedText, handleGenerateText } = useGenerateText()
    const [topic, setTopic] = useState("");
    const [level, setLevel] = useState("A2");


    const handleSelectTopic = (selectedTopic: string) => {
        setTopic(selectedTopic);
    };

    const handleSelectLevel = (selectedLevel: string) => {
        setLevel(selectedLevel);
    };

    return (
        <Box sx={{ mt: 2, ml: 2 }}>
            <Grid container spacing={2}>
                <Grid size={{xs: 2}} sx={{display: "flex", flexDirection: "column"}}>
                    <Typography variant="h5" sx={{display: 'flex', justifyContent: 'center'}}>Выберите тему</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, border: 1, borderColor: "primary.main", borderRadius: '16px', p: 1 }}>
                        {["Технологии", "Мотивация", "Природа", "Культура"].map((top) => (
                            <Button
                                key={top}
                                variant={topic === top ? "contained" : "outlined"}
                                onClick={() => handleSelectTopic(top)}
                            >
                                {top}
                            </Button>
                        ))}
                    </Box>

                    <Typography variant="h5" sx={{ mt: 2 , display: 'flex', justifyContent: 'center'}}>
                        Выберите уровень
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, border: 1, borderColor: "primary.main", borderRadius: '16px', p: 1 }}>
                        {["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
                            <Button
                                key={lvl}
                                variant={level === lvl ? "contained" : "outlined"}
                                onClick={() => handleSelectLevel(lvl)}
                            >
                                {lvl}
                            </Button>
                        ))}
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => {handleGenerateText(topic,level)}} sx={{ mt: 2 }}>
                        Сгенерировать текст
                    </Button>
                </Grid>
                <Grid size={{xs: 9}} mt={4} >
                        <GeneratedTextBox isLoading={isLoading} generatedText={generatedText} />
                </Grid>
            </Grid>

        </Box>
    );
}
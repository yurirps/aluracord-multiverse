import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function PaginaDoChat(){
    return(
        <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[600],
          backgroundImage:
            "url(https://i.ytimg.com/vi/AvWUXoIJRso/maxresdefault.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
        >

        </Box>
    )
}
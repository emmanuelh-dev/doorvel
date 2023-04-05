import React from "react";
import { formatearFecha } from "@/utils/helpers";
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  id: number;
  property_category_id: number;
  name: string;
  seo_friendly: string;
  active_record: boolean;
  created_at: string;
  updated_at: string;
  created_by: string;
}
export const PostPreview = ({ name, updated_at, created_by }: Props) => {
  return (
    <Card sx={{ mb: 4, bgcolor: "background.paper" }} variant="outlined">
      <Typography variant="h5" component="h2" sx={{ p: 2 }}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ px: 2, pb: 2 }}>
        {formatearFecha(updated_at)} - By {created_by}
      </Typography>
    </Card>
  );
};
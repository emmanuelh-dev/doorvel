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
    <Card sx={{ mb: 4 }} className="bg-white dark:bg-black dark:text-white p-4 rounded-xl">
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="body2" className="dark:text-neutral-400 text-neutral-900" gutterBottom>
        {formatearFecha(updated_at)} - By {created_by}
      </Typography>
    </Card>
  );
};

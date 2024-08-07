import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CategoryCard = ({ category }: any) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-black">
          {category.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.subcategories.map((subcategory: any, subIndex: any) => (
            <span
              key={subIndex}
              className="text-sm font-medium"
            >
              {subcategory}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

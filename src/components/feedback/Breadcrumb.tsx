import { LucideProps } from "lucide-react";
import { ComponentType, Fragment } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";

interface BreadcrumbProps {
  data: {
    name: string;
    url: string;
    icon?: ComponentType<LucideProps>;
  }[]
}

export default function AppBreadcrumb({ 
  data
}: BreadcrumbProps) {
  return (
    <Breadcrumb className="bg-white w-fit p-3 rounded-md">
      <BreadcrumbList>
        {
          data.map((item, index) => {
            if (index === data.length - 1) {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="flex gap-1.5 items-center">
                    {item.icon && <item.icon size={16} />}
                    {item.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )
            } else {
              return (
                <Fragment key={index}>
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink href={item.url} className="flex gap-1.5 items-center">
                      {
                        item.icon &&
                        <item.icon size={16} />
                      }
                      {item.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              )
            }
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
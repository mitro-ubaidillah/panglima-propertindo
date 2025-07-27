"use client"

import AppBreadcrumb from "@/components/feedback/Breadcrumb";
import CardFeedback from "@/components/feedback/CardFeedback";
import Layout from "@/components/feedback/layouts";
import NotificationBox from "@/components/feedback/Notification";
import InputLabel from "@/components/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFeedback } from "@/hooks/use-feedback";
import { StatusFeedbackType } from "@/types/feedback";
import { Home, MessagesSquare, PlusSquare, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const BREADCRUMBS = [
  {
    name: "",
    url: "/feedback",
    icon: Home
  },
  {
    name: "Feedback",
    url: "/feedback",
    icon: MessagesSquare
  }
]

export default function Feedback() {
  const { useGetFeedback } = useFeedback();
  const [keyword, setKeyword] = useState<string>("");
  const [debounceSearchId, setDebounceSearchId] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [status, setStatus] = useState<StatusFeedbackType>();
  const router = useRouter();

  const { data, isLoading, isError, error } = useGetFeedback();

  useEffect(() => {
    if (isError && error) {
      toast("Error", {
        position: "top-right",
        style: { color: "red" },
        description: error?.message
      })
    }
  },[isError, error]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearchId(keyword);
    }, 300);

    return () => clearTimeout(timer);
  },[keyword]);

  const unitOptions = [...new Set(data?.map(item => item.unit))];

  const StatusFeedbackLabels = {
    waiting: "Waiting",
    resolved: "Resolved", 
    in_progress: "In Progress",
    pending: "Pending"
  } as const;

  const statusOptions = Object.entries(StatusFeedbackLabels).map(([value, label]) => ({
    label,
    value
  }));

  const filteredData = useMemo(() => {
    return (data || []).filter(item => {
      const matchId = item.id.toString().includes(debounceSearchId.trim());
      const matchUnit = unit ? item.unit === unit : true;
      const matchStatus = status ? item.status === status : true;
      return matchId && matchUnit && matchStatus;
    });
  }, [data, debounceSearchId, unit, status]);

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <AppBreadcrumb data={BREADCRUMBS} />
        <Button onClick={() => router.push("/feedback/add")}>
          <PlusSquare />
          Buat Feedback
        </Button>
      </div>
      <NotificationBox />
      <div className="flex justify-between">
        <h1 className="text-lg text-foreground font-semibold">Daftar Feedback</h1>
        <div className="grid grid-cols-3 gap-4">
          <Select value={unit} onValueChange={setUnit}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {
                  unitOptions?.map((item) => (
                    <SelectItem value={item} key={item}>{item}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={(e) => setStatus(e as StatusFeedbackType)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {
                  statusOptions.map((item) => (
                    <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <InputLabel 
            starticon={Search}
            placeholder="Cari no. Tiket" 
            id="search-input"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {
          isLoading ?
          <span className="text-xl text-neutral-300 font-semibold">Loading...</span>
          :
          filteredData?.map((item) => (
            <CardFeedback
              {...item} 
              key={item.id}
            />
          ))
        }
      </div>
    </Layout>
  )
}
"use client"

import { useParams } from "next/navigation";

export default function Detail () {
  const { id } = useParams();

  return (
    <div>Detail id: {id} - Feedback</div>
  )
}
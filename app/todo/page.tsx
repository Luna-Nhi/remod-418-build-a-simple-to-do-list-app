import TaskList from "./component/TaskList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-0">
      <h1 className="text-4xl font-bold mb-4 mt-2 text-center">TO-DO LIST</h1>
      <div className="w-full">
        <TaskList />
      </div>
      <Link href="/about">
        <p className="mt-4 text-blue-500 text-center">About</p>
      </Link>
    </div>
  );
}
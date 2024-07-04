"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleFileUpload = async (e: any) => {
    e.preventDefault();

    const file = e.target.files[0];
    const metadata = {
      name: file.name,
    };
    const body = new FormData();

    body.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], {
        type: "application/json",
      })
    );
    body.append("file", file);

    try {
      const response = await fetch(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
        {
          method: "POST",
          body: body,
          headers: {
            // @ts-ignore
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        const fileId = responseData.id;
        const fileUrl = `https://drive.google.com/file/d/${fileId}/view`;

        setResultMessage(fileUrl);
      }
    } catch (error) {}
  };

  const createSpreadSheet = async () => {
    const newSpreadSheet = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets",
      {
        method: "POST",
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    const spreadsheetInstance = await newSpreadSheet.json();
    console.log("[NEWSPREADSHEET]", spreadsheetInstance);
  };

  return (
    <>
      <p className="">hello {session?.user?.name} </p>
      <button
        className="dark:bg-white dark:text-black"
        onClick={() => signOut()}
      >
        Sign Out
      </button>

      <div className="my-10">
        <input type="file" onChange={handleFileUpload} />
      </div>

      <div>
        {resultMessage ? (
          <>
            Your <a href={resultMessage}>file</a> has been uploaded
          </>
        ) : (
          "Your file sent will be displayed here"
        )}
      </div>

      <div className="mt-10">
        <button onClick={createSpreadSheet}>Create new SpeadSheet</button>
      </div>
    </>
  );
};

export default Page;

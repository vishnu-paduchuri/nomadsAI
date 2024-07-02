"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FaRegShareSquare,
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IShareProps {
  url: string;
}

const ShareModal: React.FC<IShareProps> = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    let shareUrl = "";
    const encodedUrl = encodeURIComponent(url);

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedUrl}`;
        break;
      case "gmail":
        shareUrl = `mailto:?subject=Check this out&body=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?url=${encodedUrl}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`absolute top-1 right-9 w-6 h-6`} aria-label="Share">
          <FaRegShareSquare />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={`https://diginomad.xyz/${url}`}
              readOnly
            />
          </div>
          <div className="pl-4">
            <button
              onClick={handleCopyToClipboard}
              className="text-gray-600 hover:text-gray-800"
            >
              <FaLink size={20} color={copied ? "green" : "gray"} />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 z-10 w-full max-w-md mx-auto">
          <div className="flex justify-between">
            <button
              onClick={() => handleShare("whatsapp")}
              className="text-green-500 hover:text-green-700"
            >
              <FaWhatsapp size={28} />
            </button>
            <button
              onClick={() => handleShare("gmail")}
              className="text-red-500 hover:text-red-700"
            >
              <FaEnvelope size={28} />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaTwitter size={28} />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="text-blue-700 hover:text-blue-900"
            >
              <FaLinkedin size={28} />
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="text-blue-800 hover:text-blue-900"
            >
              <FaFacebook size={28} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;

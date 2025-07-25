"use client"

import { useState } from "react"
import LoginForm from "@/components/TeamDashboard/LoginForm"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (data: any) => {
    setIsLoggedIn(true)
    if (data.user_type === "jurimember") {
      navigate("/juri-dashboard")
    } else {
      navigate("/member-dashboard")
    }
  }

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />
  }

  return null
}

export default Index
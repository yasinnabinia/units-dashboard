{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh15140\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useEffect, useState \} from "react";\
\
type Unit = \{\
  id: number;\
  available: boolean;\
  name: string;\
  email: string;\
  phone: string;\
  owner: string;\
  location: string;\
  vehicleType: string;\
  dimensions: string;\
  capacity: number;\
  note: string;\
\};\
\
export default function UnitsPage() \{\
  const [units, setUnits] = useState<Unit[]>([]);\
\
  useEffect(() => \{\
    fetch("/api/units")\
      .then((res) => res.json())\
      .then((data) => setUnits(data));\
  \}, []);\
\
  return (\
    <div style=\{\{ padding: "2rem", fontFamily: "sans-serif" \}\}>\
      <h1 style=\{\{ fontSize: "1.5rem", marginBottom: "1rem" \}\}>Units</h1>\
      <table\
        style=\{\{\
          borderCollapse: "collapse",\
          width: "100%",\
          textAlign: "left",\
        \}\}\
      >\
        <thead>\
          <tr>\
            <th>ID</th>\
            <th>Available</th>\
            <th>Name</th>\
            <th>Email</th>\
            <th>Phone</th>\
            <th>Owner</th>\
            <th>Location</th>\
            <th>Vehicle Type</th>\
            <th>Dimensions</th>\
            <th>Capacity</th>\
            <th>Note</th>\
          </tr>\
        </thead>\
        <tbody>\
          \{units.map((unit) => (\
            <tr key=\{unit.id\}>\
              <td>\{unit.id\}</td>\
              <td>\{unit.available ? "\uc0\u9989 " : "\u10060 "\}</td>\
              <td>\{unit.name\}</td>\
              <td>\{unit.email\}</td>\
              <td>\{unit.phone\}</td>\
              <td>\{unit.owner\}</td>\
              <td>\{unit.location\}</td>\
              <td>\{unit.vehicleType\}</td>\
              <td>\{unit.dimensions\}</td>\
              <td>\{unit.capacity\}</td>\
              <td>\{unit.note\}</td>\
            </tr>\
          ))\}\
        </tbody>\
      </table>\
    </div\
}
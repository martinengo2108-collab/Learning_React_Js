import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import{getPost}from"../services/postservice";
import Loading from"../components/Loading";
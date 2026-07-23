import streamlit as st
import os

st.set_page_config(layout="wide")

st.title("🌿 우리시골")

html_file = os.path.abspath("index.html")

st.markdown(
    f"""
    <iframe
        src="file://{html_file}"
        width="100%"
        height="900"
        style="border:none;">
    </iframe>
    """,
    unsafe_allow_html=True
)

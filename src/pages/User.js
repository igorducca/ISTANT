import React, { useState, useEffect } from 'react'

export default function User(props) {

    var selectedUser = props.match.params.user

    console.log(selectedUser)

    return (
        <div>
            <h1>blablabla</h1>
        </div>
    )
}
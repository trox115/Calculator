import React from 'react'
const ButtonPanel = () => {
    return (
        <div className='buttons'>
            <div className='group1'>
                <button name='AC'/>
                <button name='+/-'/>
                <button name='%'/>
                <button name='/'/>
            </div>
            <div className='group2'>
                <button name='7'/>
                <button name='8'/>
                <button name='9'/>
                <button name='X'/>
            </div>
            <div className='group3'>
                <button name='4'/>
                <button name='5'/>
                <button name='6'/>
                <button name='-'/>
            </div>
            <div className='group4'>
                <button name='3'/>
                <button name='2'/>
                <button name='1'/>
                <button name='+'/>
            </div>
            <div className='group5'>
                <button name='0'/>
                <button name=','/>
                <button name='.'/>
                <button name='='/>
            </div>
        </div>
    )
}
export default ButtonPanel

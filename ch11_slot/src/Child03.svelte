<div class="box">
    <h4>
        이름 : 
        <slot name="name">
            전달받은 이름이 없습니다.
        </slot>
    </h4>
    <p>
        배포 년도 : 
        <slot name="release">
            전달받은 배포 년도가 없습니다. 
        </slot>
    </p>
</div>

<style>
    .box{
        width: 320px; padding: 10px;
        border: 2px solid black;   
        margin-bottom: 20px;
    }
</style>
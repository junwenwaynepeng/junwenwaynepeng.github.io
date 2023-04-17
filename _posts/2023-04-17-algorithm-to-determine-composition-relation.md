---
title: Algorithm to determine composition relation
tags: [research, academic, algorithm]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---
<div class="compute"><script type="text/x-sage">
    P.<x,y> = ProjectiveSpace(ZZ,1)
    f = DynamicalSystem_projective([
            x^3 + 2*x^2*y + 3*y^3,
            x^2*y + x*y^2
        ])

    g = DynamicalSystem_projective([
            x^3 + y^3,
            y^3 + 2*x*y^2
        ])
    R = RealField(prec=100)
    Q = P.point([1,2])
    Res_f = f.resultant(normalize=True).abs()
    Res_g = g.resultant(normalize=True).abs()
    Res = max(Res_f,Res_g)
    err_f = R(Res).log() / (R(f.degree()-1) * R(f.degree()))
    err_g = R(Res).log() / (R(g.degree()-1) * R(g.degree()))
    initial_pair = (('f', f(Q), err_f), ('g', g(Q), err_g))
    check_list = [initial_pair]

    def check(f,g,a_pair):
        def get_name(F):
            if F==f:
                return 'f'
            else:
                return 'g'
        F = a_pair[0]
        G = a_pair[1]
        hF = F[1].global_height() / f.degree()^len(F[0])
        hG = G[1].global_height() / g.degree()^len(G[0])
        diff = abs(hF - hG)
        print(f'''
            --------------------------------------------------------------------
            check {F[0]} and {G[0]}:
                hF = {hF}
                hG = {hG}
                diff is {diff}
                sum of error is {F[2]+G[2]}
            --------------------------------------------------------------------
            ''')
        if diff <= F[2] + G[2]:
            next_level = []
            for f_1 in [f,g]:
                for f_2 in [f,g]:
                    f_1_name = get_name(f_1)
                    f_2_name = get_name(f_2)
                    next_level.append(((f'{f_1_name}{F[0]}',f_1(F[1]),F[2] / f_1.degree()),(f'{f_2_name}{G[0]}',f_2(G[1]), G[2] / f_2.degree())))
            return next_level

    i=0
    while check_list!=[]:
        a_pair = check_list.pop(0)
        i += 1
        try:
            check_list.extend(check(f,g,a_pair))
        except:
            pass
        if i>10:
            break
    print("No relation")
</script></div>
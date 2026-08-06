// Busca a excursão pelo id e mostra o resumo antes de partir pro fluxo de reserva.
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { formatarDataDefault, formatarValorEmReais } from '../../utils/formatters';

import { Excursao } from '../../types';
import { excursoesService } from '../../services/excursoes.service';

import {
  Container,
    Conteudo,
    Titulo,
      NomeExcursao,
      Duracao,
    Informacoes,
      InfosPontuais,
        DataPrincipal,
        Embarque,
          EmbarqueLabel,
          EmbarqueLocal,
          EmbarqueDetalhe,
      InfosDetalhadas,
        Accordion,
          AccordionResumo,
            TituloComIcone,
            IconeAtencao,
            Seta,
          AccordionConteudo,
            Linha,
              LinhaLabel,
              LinhaValor,
              SubLinha,
              SubLinhaLabel,
              SubLinhaValor,
            SubLinhas,
            ImportanteBox,
              ImportanteLabel,
            IncluiLista,
              IncluiItem,
                IncluiIcone,
              AvisoItem,
                AvisoIcone,
            NotaEmpresas,
    BarraFixaWrapper,
      Puxador,
        PuxadorTraco,
      PrecoBloco,
        PrecoConteudo,
          PrecoIcone,
          PrecoLabelValor,
            PrecoLabel,
            PrecoValor,
      BotaoReservar,
} from './DetalhesExcursao.styles';

import { SkeletonDetalhes } from './SkeletonDetalhes';
import { ErroDetalhes } from './ErroDetalhes';

export function DetalhesExcursao() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [expandido, setExpandido] = useState(true);

  const [excursao, setExcursao] = useState<Excursao | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarExcursao = () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    excursoesService.buscarDetalhes(id).then(setExcursao)
    .catch((e: Error) => {
      console.error(e);
      setError('Não foi possível carregar a excursão agora.');
    })
    .finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    carregarExcursao();
  }, []);

  if (!id) return <ErroDetalhes mensagem='Excursão não encontrada' onTentarNovamente={carregarExcursao}/>;
  if (loading) return <SkeletonDetalhes/>;
  if (error) return <ErroDetalhes mensagem={error} onTentarNovamente={carregarExcursao} />;
  if (!excursao) return <ErroDetalhes mensagem='Excursão não encontrada' onTentarNovamente={carregarExcursao}/>;

  const esgotado = excursao.vagasDisponiveis <= 0;

  return (
    <Container>
      <Conteudo>
        <Titulo>
          <NomeExcursao>{excursao.nome}</NomeExcursao>
          <Duracao>Duração: bate-volta</Duracao>
        </Titulo>
        
        <Informacoes>
          <InfosDetalhadas>
            <Accordion >
              <AccordionResumo>
                ROTEIRO
                <Seta className="seta">▾</Seta>
              </AccordionResumo>
              <AccordionConteudo>
                <Linha>
                  <LinhaLabel>Data</LinhaLabel>
                  <LinhaValor>{formatarDataDefault(excursao.dataEvento)}</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Horário de saída</LinhaLabel>
                  <LinhaValor>07h30 da manhã</LinhaValor>
                </Linha>
                <Linha className='sublinha'>
                  <LinhaLabel className='sublinha'>Tolerância de atraso</LinhaLabel>
                  <SubLinhas>
                    <SubLinha>
                      <SubLinhaLabel>IDA</SubLinhaLabel>
                      <SubLinhaValor>15min.</SubLinhaValor>
                    </SubLinha>
                    <SubLinha>
                      <SubLinhaLabel>VOLTA</SubLinhaLabel>
                      <SubLinhaValor>45min. após o término do show</SubLinhaValor>
                    </SubLinha>
                  </SubLinhas>
                </Linha>
                <Linha>
                  <LinhaLabel>Local de embarque/desembarque</LinhaLabel>
                  <LinhaValor>{excursao.localEmbarque}</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Local do evento</LinhaLabel>
                  <LinhaValor>Estádio MorumBIS/SP</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Previsão de chegada</LinhaLabel>
                  <LinhaValor>13h00. Podendo variar conforme o trânsito</LinhaValor>
                </Linha>
                <Linha>
                  <LinhaLabel>Retorno</LinhaLabel>
                  <LinhaValor>Após o término do show</LinhaValor>
                </Linha>

                <ImportanteBox>
                  <ImportanteLabel>Importante</ImportanteLabel>
                  Não paramos na porta do estádio, não é permitido. Paramos no local mais próximo que
                  conseguimos, que fica a mais ou menos 20 minutos de caminhada. Isso acontece porque a
                  CET fecha as ruas ao redor do Morumbis, dificultando o acesso direto. No dia do show,
                  a monitora enviará no grupo da excursão a localização do ponto de encontro e passará
                  todas as orientações necessárias. Após o fim do show, ela estará disponível para
                  auxiliar quem precisar de suporte.
                </ImportanteBox>
              </AccordionConteudo>
            </Accordion>
            
            <Accordion >
              <AccordionResumo>
                O QUE INCLUI
                <Seta className="seta">▾</Seta>
              </AccordionResumo>
              <AccordionConteudo>
                <IncluiLista>
                  <IncluiItem>
                    <IncluiIcone>✓</IncluiIcone>
                    Transporte ida e volta para o evento em veículo executivo com ar condicionado,
                    poltronas soft e seguro passageiro
                  </IncluiItem>
                  <IncluiItem>
                    <IncluiIcone>✓</IncluiIcone>
                    Água mineral e biscoitos enquanto durar o estoque
                  </IncluiItem>
                  <AvisoItem>
                    <AvisoIcone>✕</AvisoIcone>
                    O INGRESSO NÃO ESTÁ INCLUSO
                  </AvisoItem>
                </IncluiLista>

                <NotaEmpresas>
                  Trabalhamos com empresas renomadas, com veículos legalizados, regulamentados e
                  segurados.
                </NotaEmpresas>
              </AccordionConteudo>
            </Accordion>

            <Accordion >
              <AccordionResumo className='avisoImportante'>
                <TituloComIcone>
                  <IconeAtencao aria-hidden="true">!</IconeAtencao>
                  VIAGEM DE MENORES DE IDADE
                </TituloComIcone>
                <Seta className="seta">▾</Seta>
              </AccordionResumo>
              <AccordionConteudo>
                <ImportanteBox>
                  Visando o cumprimento da legislação vigente e a segurança de todos os passageiros, informamos as seguintes regras para o embarque de menores de idade:
                  <br/>
                  <br/>
                  <strong>Adolescentes de 16 e 17 anos:</strong>
                  Poderão viajar desacompanhados <strong>somente mediante apresentação de Autorização de Viagem válida</strong>, assinada pelos pais ou responsáveis legais, permitindo a viagem desacompanhada ao destino. Também poderão viajar acompanhados pelos pais, responsáveis legais ou por um maior de idade devidamente autorizado.
                  <br/>
                  <br/>
                  <strong>Menores de 16 anos (15 anos ou menos):</strong>
                  Poderão viajar <strong>exclusivamente acompanhados pelos pais ou responsáveis legais</strong>, ou por um acompanhante maior de 18 anos que esteja portando a <strong>Autorização de Viagem</strong> assinada pelos pais ou responsáveis legais, conforme exigido pela legislação.
                  <br/>
                  <br/>
                  Importante:
                  A apresentação da documentação obrigatória é de responsabilidade do passageiro e/ou de seus responsáveis. A ausência dos documentos exigidos poderá impedir o embarque, sem direito a reembolso, conforme as normas legais aplicáveis.
                  <br/>
                  <br/>
                  Em caso de dúvidas sobre a documentação necessária, entre em contato com nossa equipe antes da data da viagem.
                </ImportanteBox>
              </AccordionConteudo>
            </Accordion>
          </InfosDetalhadas>

          <InfosPontuais>
            <DataPrincipal>Data: {formatarDataDefault(excursao.dataEvento)}</DataPrincipal>

            <Embarque>
              <EmbarqueLabel>EMBARQUE</EmbarqueLabel>
              <EmbarqueLocal>{excursao.localEmbarque}</EmbarqueLocal>
              <EmbarqueDetalhe>15 minutos de tolerância</EmbarqueDetalhe>
              <EmbarqueDetalhe>
                {formatarDataDefault(excursao.dataEvento)} às {excursao.horarioEmbarque}
              </EmbarqueDetalhe>
            </Embarque>
          </InfosPontuais>
        </Informacoes>
      </Conteudo>

      {/* <Espacador style={{ height: alturaBarra }} /> */}

      <BarraFixaWrapper>
        <Puxador
          onClick={() => setExpandido((atual) => !atual)}
          aria-expanded={expandido}
          aria-label={expandido ? 'Recolher preço' : 'Mostrar preço'}
        >
          <PuxadorTraco />
        </Puxador>

        <PrecoBloco $expandido={expandido}>
          <PrecoConteudo>
            <PrecoIcone>$</PrecoIcone>
            <PrecoLabelValor>
              <PrecoLabel>a partir de</PrecoLabel>
              <PrecoValor>
                {formatarValorEmReais(excursao.valorCentavos)} <span>/por pessoa</span>
              </PrecoValor>
            </PrecoLabelValor>
          </PrecoConteudo>
        </PrecoBloco>

        <BotaoReservar
          $esgotado={esgotado}
          disabled={esgotado}
          onClick={() => !esgotado && navigate('/aceite-contrato')}
        >
          {esgotado ? 'ESGOTADO' : 'RESERVAR'}
        </BotaoReservar>
      </BarraFixaWrapper>
    </Container>
  );
}
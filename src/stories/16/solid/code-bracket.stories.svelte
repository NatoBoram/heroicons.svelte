<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSvelte from '../../../lib/16/solid/code-bracket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CodeBracketSvelte,
		args: { class: '' },
	})
</script>

<Story name="CodeBracket" />

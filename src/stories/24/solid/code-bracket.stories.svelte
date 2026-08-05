<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSvelte from '../../../lib/24/solid/code-bracket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CodeBracketSvelte,
		args: { class: '' },
	})
</script>

<Story name="CodeBracket" />

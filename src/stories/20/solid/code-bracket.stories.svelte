<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSvelte from '../../../lib/20/solid/code-bracket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CodeBracketSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CodeBracket" />

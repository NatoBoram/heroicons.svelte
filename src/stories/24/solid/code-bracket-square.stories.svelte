<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSquareSvelte from '../../../lib/24/solid/code-bracket-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CodeBracketSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="CodeBracketSquare" />

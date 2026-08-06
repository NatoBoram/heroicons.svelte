<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSvelte from '../../../lib/24/outline/code-bracket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CodeBracketSvelte,
		args: { class: '' },
	})
</script>

<Story name="CodeBracket" />

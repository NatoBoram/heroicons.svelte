<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StrikethroughSvelte from '../../../lib/20/solid/strikethrough.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: StrikethroughSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Strikethrough" />

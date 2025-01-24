<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SparklesSvelte from '../../../lib/16/solid/sparkles.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SparklesSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Sparkles" />

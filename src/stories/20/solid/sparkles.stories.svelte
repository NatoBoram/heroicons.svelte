<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SparklesSvelte from '../../../lib/20/solid/sparkles.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SparklesSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Sparkles" />

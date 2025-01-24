<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckCircleSvelte from '../../../lib/20/solid/check-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CheckCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CheckCircle" />

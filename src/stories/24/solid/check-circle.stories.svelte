<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckCircleSvelte from '../../../lib/24/solid/check-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CheckCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="CheckCircle" />
